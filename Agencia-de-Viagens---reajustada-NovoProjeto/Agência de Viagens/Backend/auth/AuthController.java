@RestController
@RequestMapping("/auth")
public class AuthController {

@PostMapping("/login")
public Map<String,String> login(@RequestBody Usuario usuario){

String token = JwtUtil.gerarToken(usuario.getUsername());

return Map.of("token", token);
}
}