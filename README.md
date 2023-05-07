# Starter code for Faucet dApp tutorial

Boilerplate code consisting of a new create-react-app project and some basic HTML and CSS.


## Lancement 

`npm install`

Puis `npm run start` va lancer le site sur le port 3000.

## Problèmes

Mes problèmes sont dans `App.js` mais peut-être reliés à `ethereum/faucet.js`. 
Dans `faucet.js` je suis allé récupérer le contrat de faucet Mumbai sur [thirdweb Faucet Polygon](https://thirdweb.com/mumbai/0x5649dFa98CC3923635E0D20783a4d5db0b491715/sources).

En suivant le tuto [Web3 Tutorial Project | Build a Faucet dApp with Ethersjs & Reactjs de Block explorer](https://www.youtube.com/watch?v=Yecd8UtY8cI) à partir de 18:00 il modifie la méthode `getCurrentWalletConnected()` en y ajoutant : 
```js
/* get provider*/
const provider = new ethers.providers.Web3Provider(window.ethereum);
/* get accounts */
const accounts = await provider.send("eth_accounts", []);

if (accounts.length > 0) {
  /* get signer */
  setSigner(provider.getSigner());
  /* local contract instance */
  setFcContract(faucetContract(provider));
``` 

Avec les constantes :

```js
const [walletAddress, setWalletAddress] = useState("");
const [signer, setSigner] = useState();
const [fcContract, setFcContract] = useState();
```

Ces nouvelles lignes commencent l.45 dans `App.js`.

PROBLÈME : en ajoutant la ligne `setFcContract(...)` la connexion à la wallet ne marche plus et j'ai beaucoup d'erreurs dans ma console de la forme : 
![](screen_errors/Sender_Failed_to_get_initial_state).
Une autre erreur qui revient souvent est : `Cannot read properties of undefined (reading 'map')` provenant de l'intégration de la ligne 
```js   
setFcContract(faucetContract(provider));
```


## Contrat Faucet

- Il y en a un disponible à l'adresse [ThirWeb Mumbai Faucet](https://thirdweb.com/mumbai/0x5649dFa98CC3923635E0D20783a4d5db0b491715/sources)

- Un réalisé par Block Explorer [Create a Faucet contract Youtube](https://www.youtube.com/watch?v=jKW_0PQuIQw) avec un repo associé [erc20 tutorial block explorer](https://github.com/jspruance/erc20-tutorial-block-explorer).


## Suite

Je n'en suis encore qu'au début et il y a déjà deux erreurs majeures.

J'ai ajouté le fichier `Final_App.js` qui est ce que Block Explorer a coder à la fin du tuto. 
 
