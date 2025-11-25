package kong.com.template.service;

import kong.com.template.entity.Users;
import kong.com.template.repository.UsersRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UsersService {
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    public Users saveUser(String username, String password) {
        Users newUser = new Users(username, password);
        newUser.setLastLogin(new Date());
        try {
            return usersRepository.save(newUser);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("Username is already taken");
        }
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }


    public Users login(String username, String password) throws Exception{
        try {
            Users user = usersRepository.findUsersByUsername(username);
            if(user.getPassword().equals(password)) {
                Users userToSave = user;
                user.setLastLogin(new Date());
                usersRepository.save(user);
                return userToSave;
            } else {
                throw new RuntimeException("Wrong Password");
            }
        } catch(Exception e) {
            throw new NoSuchElementException("No user found");
        }
    }

    public Users getUserById(Long id) {
        return usersRepository.getUsersById(id);
    }
}
