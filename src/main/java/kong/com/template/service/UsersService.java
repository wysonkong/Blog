package kong.com.template.service;

import kong.com.template.entity.Role;
import kong.com.template.entity.Users;
import kong.com.template.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public Users saveUser(Users user) {
        user.setRole(Role.SOLDIER);
        return usersRepository.save(user);
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }
}
