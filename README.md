## A destination des associations.  

Vous êtes une association souhaitant recolter des dons?  
Sentez vous libre d'utiliser ce template prédéfini permettant de percevoir des dons.  

Le script et le html peuvent être adaptés pour ajouter des bouttons de choix de sommes:  
par exemple 1€ / 5€ / 20€ ou encore pourquoi pas un input à champ libre (warning: sanitize)

Dans un premier temps rendez vous sur :
https://developer.paypal.com/dashboard/

Connectez vous à votre compte.  
Si vous n'en avez pas encore, créé vous un compte business sur paypal.  

une fois activé rendez vous dans l'onglet developpeur et recupéré la clé publique.  

Interpolé cette clé en params de l'url du script html contenu dans le head du fichier index.html:

```
<script src="https://www.paypal.com/sdk/js?client-id=COPIER_VOTRE_CLE_PUBLIQUE&currency=EUR"></script>
```

Tout est prêt une fois votre compte paypal officialisé la page de don est prête à être mise en production.



