@Service
public class StripeService {

@Value("${stripe.secret.key}")
private String apiKey;

public String criarPagamento(Long valor) throws Exception{

Stripe.apiKey = apiKey;

PaymentIntentCreateParams params =
PaymentIntentCreateParams.builder()
.setAmount(valor)
.setCurrency("brl")
.build();

PaymentIntent intent = PaymentIntent.create(params);

return intent.getClientSecret();
}
}