echo -n "_auth = " > ~/.npmrc
echo "Username:Password" | base64 >> ~/.npmrc
echo "email = email@email.com" >> ~/.npmrc