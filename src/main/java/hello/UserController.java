package hello;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller public class UserController {
    @RequestMapping(value = "/users")
    public String index(){
        return "index";
    }
}
