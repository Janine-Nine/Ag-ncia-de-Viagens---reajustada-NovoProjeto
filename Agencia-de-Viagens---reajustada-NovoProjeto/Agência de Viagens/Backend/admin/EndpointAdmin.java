@RestController
@RequestMapping("/admin")
public class AdminController {

@Autowired
ReservaService reservaService;

@GetMapping("/reservas")
public List<Reserva> listar(){
 return reservaService.listarReservas();
}
}