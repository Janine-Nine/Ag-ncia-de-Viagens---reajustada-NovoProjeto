@RestController
@RequestMapping("/api/pagamentos")
public class PaymentController {

@Autowired
private StripeService stripeService;

@PostMapping
public Map<String,String> pagar(@RequestBody Map<String,Long> request) throws Exception{

String clientSecret = stripeService.criarPagamento(request.get("valor"));

return Map.of("clientSecret",clientSecret);
}
}