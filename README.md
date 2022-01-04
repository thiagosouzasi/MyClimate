# MyClimate

App para Android e IOS construído com React Native utilizando a lib [WeatherAPI](https://www.weatherapi.com/) para exibir informações sobre o clima local. <br>
Os dados informados são obtidos através da localização do usuário obtida através da lib [
react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service).

## Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tecnologias utilizadas

![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Prints das Telas
![Screen](src/Assets/Chuva.png)
![Screen](src/Assets/Nublado.png)
![Screen](src/Assets/Sol.png)


## Como executar o projeto
Pré-requisitos npm/yarn

## Chave de API
A lib exige uma chave que precisa ser cadastrada no site e deve ser enviada juntamente com as requisições para o recebimento das informações sobre o clima. Essa chave deve ser substituída no código do projeto no path -> src/Api/index.js sobrescervendo a variável API_KEY.

## Instalação das bibliotecas

```bash 
# 1- Lib de geolocalização
yarn add react-native-geolocation-service 
ou
npm install react-native-geolocation-service

# 2-Axios
npm install axios
ou
yarn add axios


```
## Baixando o projeto 
```bash
# 1- Clonar o repositório
git clone https://github.com/thiagosouzasi/MyClimate.git

# 2- Entre na pasta do projeto
cd pdf-report

# 3- executar o projeto
yarn start

```



## Autor
Thiago Souza <br>
[![License: MIT](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-ramos-de-souza-42804ab1/)
[![License: MIT](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/prof_thiago_souza/)