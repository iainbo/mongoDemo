package hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PersonController {
    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }
}