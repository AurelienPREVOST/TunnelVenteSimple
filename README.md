## A destination des associations  

Vous êtes une association souhaitant recolter des dons?  
Sentez vous libre d'utiliser ce template prédéfini permettant de percevoir des dons.  

Le script et le html peuvent être adaptés pour ajouter des bouttons de choix de sommes:  
par exemple 1€ / 5€ / 20€ ou encore pourquoi pas un input à champ libre (warning: sanitize)


![wsl localhost_Ubuntu_home_delta_code_AurelienPREVOST_TunnelVente_index html](https://github.com/AurelienPREVOST/TunnelVenteSimple/assets/102169301/4e83fd3e-292a-4c0f-8fbb-d4324b717971)  
![image](https://github.com/AurelienPREVOST/TunnelVenteSimple/assets/102169301/f83a7aab-d59b-4e81-8ebf-3b29ffb6b512)



Dans un premier temps rendez vous sur :
https://www.paypal.com/fr/webapps/mpp/account-selection  

Connectez vous à votre compte.  
Si vous n'en avez pas encore, créé vous un compte business sur paypal.  

![image](https://github.com/AurelienPREVOST/TunnelVenteSimple/assets/102169301/15e07d5c-03fb-42b7-b00a-48c3effc5076)


une fois activé rendez vous dans l'onglet developpeur et recupéré la clé publique à l'adresse suivante :
https://developer.paypal.com/dashboard/

Interpolez cette clé en params de l'url dans le script html contenu dans la balise head du fichier index.html:

```
<script src="https://www.paypal.com/sdk/js?client-id=COPIER_VOTRE_CLE_PUBLIQUE&currency=EUR"></script>
```

Tout est prêt une fois votre compte paypal officialisé la page de don est prête à être mise en production.



