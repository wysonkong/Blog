package kong.com.template.controller;

import kong.com.template.entity.Users;
import kong.com.template.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersController {
    public UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Users> saveUser(@RequestParam String username, @RequestParam String password){
        Users createdUser = usersService.saveUser(username, password);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getUsers() {
        List<Users> users = usersService.getUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(usersService.getUserById(id));
    }

    @PutMapping("/login")
    public ResponseEntity<Users> login(@RequestParam String username, @RequestParam String password) {
        try {
            return ResponseEntity.ok(usersService.login(username, password));
        } catch(Exception e) {
            if(e.getMessage().equals("Wrong Password")) {
                return ResponseEntity.badRequest().build();
            }else {
                return ResponseEntity.notFound().build();
            }
        }
    }


}
