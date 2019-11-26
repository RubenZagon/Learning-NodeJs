echo "Levantando docker"

# Si el docker no está con el usuario docker, necesitarás utilizar sudo,
# o puedes utilizar el siguiente comando para no necesitar sudo
# sudo usermod -aG docker ${USER}
actualDIR=${PWD}

echo "Guardando archivos de la base de datos en $actualDIR/data/db"

docker run -d --rm -p 27017:27017 -v $actualDIR/data/db:/data/db mongo
