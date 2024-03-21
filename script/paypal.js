paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '1',
                }
            }]
        })
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details){
            alert("Transaction réalisé avec succès:"+details.payer.name.given_name);
        })
    },
    onError: function(err) {
        console.error("Transaction echouée", err);
        alert("La transaction a échouée. Veuillez rééssayé. En cas d'echecs répétés n'hésitez pas à rentrer en contact avec l'administrateur du site.");
    }
}).render("#paypal-button-container");
