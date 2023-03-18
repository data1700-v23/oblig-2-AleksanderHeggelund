package oslomet.webprog.oblig2data1700aleksanderheggelund;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    private final List<Billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreKunde(Billett innKunde){
        alleBilletter.add(innKunde);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return alleBilletter;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleBilletter.clear();
    }
}

