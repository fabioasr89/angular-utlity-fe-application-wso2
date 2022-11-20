# Wso2ApplicationFe

Applicazione front end (di esempio) che dialogherà con un sistema di microservizi per gestire alcune funzionalità
di utility come invio email, conversione documenti da un formato all'altro e conversione video.

La gestione del login è delegata a WSO2. Avviare il provider dal docker file inserito nella cartella wso2,
censire il nuovo service provider è settare le claims dell'username e dei ruoli. Creare ovviamente un'utenza sul server.

Il front end invierà all'api gateway un access token recuperato da wso2, e il microservizio si occuperà di gestire
la profilazione con un jwt firmato e cifrato con RSA. 


