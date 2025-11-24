package kong.com.template.service;

import kong.com.template.entity.Users;
import kong.com.template.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UsersService {
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }


    public Users login(String username, String password) throws Exception{
        try {
            Users user = usersRepository.findUsersByUsername(username);
            if(user.getPassword().equals(password)) {
                return user;
            } else {
                throw new RuntimeException("Wrong Password");
            }
        } catch(Exception e) {
            throw new NoSuchElementException("No user found");
        }
    }
}
