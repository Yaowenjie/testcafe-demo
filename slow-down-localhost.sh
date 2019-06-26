### Slow down localhost
sudo dnctl pipe 1 config bw 10Kbit/s delay 1000

echo "dummynet out proto tcp from any to localhost pipe 1" | sudo pfctl -f -

sudo pfctl -e



### Change it back
sudo pfctl -f /etc/pf.conf
sudo dnctl -q flush