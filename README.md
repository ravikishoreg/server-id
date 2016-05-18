# server-id

On an ubuntu machine

sudo su
apt-get update
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install git npm nodejs -y --force-yes

git clone https://github.com/ravikishoreg/server-id.git
cd server-id
npm install
npm install -g forever
forever start index.js
