# ClimaSense - Station Météo Connectée (IoT)

ClimaSense est une station météo connectée, conçue pour la collecte, le stockage et la visualisation en temps réel de données environnementales. Ce projet IoT intègre des capteurs reliés à un microcontrôleur ESP32 pour capturer des informations telles que la température, l'humidité, et d'autres paramètres. Les données sont ensuite transmises via MQTT vers une infrastructure logicielle complète pour analyse et visualisation.

## Aperçu du Projet

- **Microcontrôleur** : Arduino et ESP32
- **Protocole de communication** : MQTT
- **Broker** : Mosquitto
- **Backend** : Application Spring Boot en tant que client MQTT, stockant les données dans MongoDB
- **Frontend** : Application Angular avec authentification sécurisée par JWT
- **Base de données** : MongoDB pour le stockage des données historiques

## Fonctionnalités

- **Collecte de Données** : Capteurs connectés à l'ESP32 pour mesurer des données telles que la température et l'humidité.
- **Transmission en Temps Réel** : Envoi des données via MQTT au broker Mosquitto.
- **Stockage** : Sauvegarde des données dans MongoDB via une application Spring Boot agissant comme client MQTT.
- **Visualisation en Temps Réel** : Interface Angular pour afficher les données avec mise à jour continue et graphique.
- **Sécurité** : Authentification sécurisée par JWT pour protéger l'accès à l’application.

## Installation

### Prérequis

- Arduino IDE pour programmer l’ESP32
- Node.js et Angular CLI pour le frontend
- Java et Maven pour l'application Spring Boot
- MongoDB et Mosquitto pour la gestion des données et de la communication MQTT

### Étapes d'Installation

1. **Arduino ESP32 Configuration** : Téléversez le code sur l'ESP32 pour configurer les capteurs et envoyer les données via MQTT.
2. **Configurer Mosquitto** : Assurez-vous que le broker MQTT est opérationnel pour la réception de données.
3. **Démarrer l'Application Spring Boot** : L'application se connecte au broker MQTT, reçoit les données et les stocke dans MongoDB.
4. **Démarrer l'Application Angular** : Affichez les données en temps réel via une interface utilisateur.

## Structure du Projet

```
ClimaSense/
├── ESP32/                  # Code de l’ESP32 pour les capteurs et la communication MQTT
├── WeatherApi/             # Application Spring Boot pour la gestion des données
├── WeatherVue/             # Application Angular pour la visualisation en temps réel
└── README.md               # Documentation du projet
```

## Images

### Architecture Globale

![Architecture Globale](https://github.com/user-attachments/assets/bee8c225-368d-49bc-880e-0c78e08fe3c5)


### Station Météo

![Station Météo](https://github.com/user-attachments/assets/be8d2fb2-93a4-4276-95c6-640b7f9f0371)


### Interface de l'Application

![Interface de l'Application](https://github.com/user-attachments/assets/d01de90d-3924-4d57-9416-929b754e950b)

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour toute suggestion d'amélioration.
