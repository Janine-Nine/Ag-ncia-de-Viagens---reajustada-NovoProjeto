document.addEventListener('DOMContentLoaded', function() {
    console.log("Site carregado com sucesso!");
});

document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('input[name="pagamento"]');
    const detailsSection = document.querySelector('.payment-details');
});

paymentOptions.forEach(function(option => {

    option.addEventListener("change", function() {

    detailsSections.forEach(section => section.style.display = "none");

    this.parentElement.querySelector(".payment-details").style.display = "block";
});
});
});


paypal.Buttons({
   createOrder: function(data, actions) {
         return actions.order.create({
              purchase_units: [{
                amount: {
                     value: '100.00' // Defina o valor do pagamento
                }
              }]
         });
   }
})

onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
        alert('Transação concluída com sucesso!' + details.payer.name.given_name);
    });
}

}).render('#paypal-button-container');
</script>
var stripe = Stripe("SUA_PUBLIC_KEY");
var checkoutButton = document.getElementById("stripe-button");

checkoutButton.addEventListener("click", function () {
    fetch("/criar-sessao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: document.getElementById("email").value })
    })
.then(response => response.json())
.then(session => {
    return stripe.redirectToCheckout({ sessionId: session.id });
})
.catch(error => console.error("Erro:", error));
</script>

document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('input[name="pagamento"]');
    const detailsSection = document.querySelector('.payment-details');

    // Exibir apenas os detalhes do método selecionado
    paymentOptions.forEach(function(option) {
        option.addEventListener("change", function() {
            detailsSection.style.display = "none";
            this.parentElement.querySelector(".payment-details").style.display = "block";
        });
    });

    // Geração de boleto (simulação)
    const gerarBoletoBtn = document.getElementById(",btn-secondary");
    if (gerarBoletoBtn) {
        gerarBoletoBtn.addEventListener("click", function() {
            alert("Boleto gerado com sucesso! Enviado para o seu e-mail.");
        });
    }

    // Integração com PayPal
    if (document.getElementById("paypal-button-container")) {
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '100.00'
                        } // Defina o valor do pagamento
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transação concluída com sucesso! ' + details.payer.name.given_name);
                });
            }
        }).render('#paypal-button-container');
    }

    // Integração com Stripe
    const stripeButton = document.getElementById("stripe-button");
    if (stripeButton) {
        stripeButton.addEventListener("click", function() {
            fetch("/criar-sessao", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: document.getElementById("email").value })
            })
            .then(response => response.json())
            .then(session => {
                var stripe = Stripe("SUA_PUBLIC_KEY"); // Substitua com sua chave pública do Stripe
                return stripe.redirectToCheckout({ sessionId: session.id });
            })
            .catch(error => console.error("Erro:", error));
        });
    }

    // Simulação de pagamento via PIX (QR Code)
    const pixButton = document.getElementById("#pix");
    if (pixButton) {
        pixButton.addEventListener("click", function() {
            alert("QR Code gerado com sucesso! Escaneie para realizar o pagamento.");
        });
    }