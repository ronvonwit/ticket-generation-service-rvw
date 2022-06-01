# ticket-generation-service
Component behorende bij Ticket Booking Camunda demo opstelling, verantwoordelijk voor het maken van tickets. Biedt een REST resource aan, waarmee opdrachten aangenomen worden.

## Code gedeployed middels GitHub Actions
* Gebruikte Secrets: EC2 Instance public IP en EC2 SSH key

## Aanmaken instanties EC2 Linux 2
* Inbound security rechten voor any IP op poort 3000 nodig.

## Installation Amazon EC2 Linux 2
* sudo yum update
* sudo curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
* sudo yum install -y nodejs
* sudo npm install -g typescript
* sudo npm install -g ts-node

## Run NodeJs Fake Ticket Generation Service

If you want to understand the code, please have a look into this get started tutorial: https://github.com/camunda/camunda-platform-get-started/tree/main/nodejs

```
cd fake-services-nodejs
npm update
ts-node src/app.ts
```
