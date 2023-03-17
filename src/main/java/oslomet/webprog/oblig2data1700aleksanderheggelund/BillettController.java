package oslomet.webprog.oblig2data1700aleksanderheggelund;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    private final List<Billett> alleKunder = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreKunde(Billett innKunde){
        alleKunder.add(innKunde);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return alleKunder;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleKunder.clear();
    }
}

