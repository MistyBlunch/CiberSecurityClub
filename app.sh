#!/usr/bin/env bash
CMD=docker
VOL=$PWD:/usr/src/app
PORT=8000:3000
IMAGE=cybersecurity

menu () {
    echo -e "\e[1mDebe poner como parámetro una de las siguientes opciones:\e[0m"
    echo -e "\e[92mbuild\e[0m   --Construccion de la imagen"
    echo -e "\e[91mrun\e[0m     --Ejecutar la aplicacion demo"
    echo -e "\e[92mbash\e[0m    --Ejecutar bash de la imagen"
    return
}

case $1 in
    build)
        echo -e "\e[1;92mcreando la imagen de \e[1;91;4m"$IMAGE"\e[0m"
        $CMD build -t $IMAGE .
        echo -e "\e[1;92mfin de la creacion de la imagen demo\e[0m"
        echo -e "\e[1;92mInstalacion de las dependencias de "$IMAGE"\e[0m"
	    $CMD run --rm -it  -v $VOL $IMAGE bash -c "npm install"
        echo -e "\e[1;92mFin de la instalacion de las dependencias de demo\e[0m"
        ;;
    bash)
        echo -e "\e[1;92mEjecución de bash en la imagen\e[0m"
	    $CMD run -p $PORT --rm -it -v $VOL $IMAGE bash
        echo -e "\e[1;92mFin de la ejecución de bash\e[0m"
        ;;
    run)
        echo -e "\e[1;92mEjecución de la demo de identiface en el puerto externo 3000\e[0m"
	    $CMD run -p $PORT --rm -it -v $VOL $IMAGE bash -c "npm run start"
        echo -e "\e[1;92mFin de la ejecución\e[0m"
        ;;
    *)
        menu
        ;;
esac
