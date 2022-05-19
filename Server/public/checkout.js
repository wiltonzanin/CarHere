      // This is your test publishable API key.
      const stripe = Stripe("pk_test_51KZFMuI61EuHiQMEAlsKmdW0p7BWOVpXyID3E9RbC1FPAolSSTXOepQhBKirFPHrI8HTVbmoEyF3hxxFlVThrumI00iq8dFURS");

      // The items the customer wants to buy
      const items = [{ id: "prod_LFlXKzKr517h1f" }];
      let elements;
      
      initialize();
      checkStatus();
      
      document
        .querySelector("#payment-form")
        .addEventListener("submit", handleSubmit);
      
      // Fetches a payment intent and captures the client secret
      async function initialize() {
        const response = await fetch("http://192.168.254.3:4242/create-payment-intent", { // MUDAR URL antes de gerar''''''''''''''''''''''''''''
        // const response = await fetch("http://10.30.56.5:4242/create-payment-intent", { // MUDAR URL antes de gerar''''''''''''''''''''''''''''
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items }),
        });
        //pega a secret do usuário
        const { clientSecret } = await response.json();
      
        const appearance = {
          theme: 'stripe',
        };
        elements = stripe.elements({ appearance, clientSecret });
      
        const paymentElement = elements.create("payment");
        paymentElement.mount("#payment-element");
      }
      
      async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
      //completa o pagamento
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://192.168.254.3:4242/success.html", // MUDAR URL '''''''''''''''''''''''''''''''''''''''
            // return_url: "http://10.30.56.5:4242/success.html", // MUDAR URL '''''''''''''''''''''''''''''''''''''''
            receipt_email: document.getElementById("email").value,
          },
        });
      
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
          showMessage(error.message);
        } else {
          showMessage("An unexpected error occured.");
        }
      
        setLoading(false);
      }
      
      // Fetches the payment intent status after payment submission
      async function checkStatus({navigation}) {
        const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        );
      
        if (!clientSecret) {
          return;
        }
      
        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      
        switch (paymentIntent.status) {
          case "succeeded":
            console.log("chegou")
            showMessage("Pagamento Recebido!");
            break;
          case "processing":
            showMessage("Pagamento em Processamento.");
            break;
          case "requires_payment_method":
            showMessage("Pagamento Negado, Tente Novamente.");
            break;
          default:
            showMessage("Something went wrong.");
            break;
        }
      }
      
      // ------- UI helpers -------
      
      function showMessage(messageText) {
        const messageContainer = document.querySelector("#payment-message");
      
        messageContainer.classList.remove("hidden");
        messageContainer.textContent = messageText;
      
        setTimeout(function () {
          messageContainer.classList.add("hidden");
          messageText.textContent = "";
        }, 4000);
      }
      
      // Show a spinner on payment submission
      function setLoading(isLoading) {
        if (isLoading) {
          // Disable the button and show a spinner
          document.querySelector("#submit").disabled = true;
          document.querySelector("#spinner").classList.remove("hidden");
          document.querySelector("#button-text").classList.add("hidden");
        } else {
          document.querySelector("#submit").disabled = false;
          document.querySelector("#spinner").classList.add("hidden");
          document.querySelector("#button-text").classList.remove("hidden");
        }
      }