#!/usr/bin/env bash
set -Eeuo pipefail

REPOSITORY="https://github.com/OneLegChicken/NorthStar.git"
BRANCH="main"
INSTALL_DIR="/opt/northstar-panel"
PORT="${NORTHSTAR_PORT:-8080}"
NGINX_CONF="/etc/nginx/conf.d/northstar-panel.conf"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run this installer as root, for example: curl ... | sudo bash" >&2
  exit 1
fi

if ! command -v apt-get >/dev/null 2>&1; then
  echo "This installer supports Ubuntu and other apt-based systems." >&2
  exit 1
fi

if [[ ! "${PORT}" =~ ^[0-9]+$ ]] || (( PORT < 1 || PORT > 65535 )); then
  echo "NORTHSTAR_PORT must be a valid TCP port (1-65535)." >&2
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y --no-install-recommends ca-certificates git nginx

if [[ -d "${INSTALL_DIR}/.git" ]]; then
  git -C "${INSTALL_DIR}" fetch --depth=1 origin "${BRANCH}"
  git -C "${INSTALL_DIR}" merge --ff-only FETCH_HEAD
elif [[ -e "${INSTALL_DIR}" ]]; then
  echo "${INSTALL_DIR} exists but is not a Git checkout; move it aside before installing." >&2
  exit 1
else
  git clone --depth=1 --branch "${BRANCH}" "${REPOSITORY}" "${INSTALL_DIR}"
fi

for required_file in index.html app.js styles.css; do
  if [[ ! -f "${INSTALL_DIR}/${required_file}" ]]; then
    echo "Expected ${INSTALL_DIR}/${required_file} after checkout; stopping." >&2
    exit 1
  fi
done

chown -R root:root "${INSTALL_DIR}"
chmod -R a+rX "${INSTALL_DIR}"

cat > "${NGINX_CONF}" <<EOF
server {
    listen ${PORT};
    listen [::]:${PORT};
    server_name _;
    root ${INSTALL_DIR};
    index index.html;
    server_tokens off;

    location / {
        try_files \$uri \$uri/ =404;
    }

    location ~ /\\. {
        deny all;
    }
}
EOF

nginx -t
systemctl enable --now nginx
systemctl reload nginx

if command -v ufw >/dev/null 2>&1 && ufw status 2>/dev/null | grep -q "Status: active"; then
  ufw allow "${PORT}/tcp"
fi

echo
echo "NorthStar Panel installed. Open http://YOUR_VPS_IP:${PORT}/"
echo "If it does not load, allow inbound TCP ${PORT} in your VPS provider firewall."
