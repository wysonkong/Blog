package kong.com.template.repository;

import kong.com.template.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    Users findUsersByUsername(String username);

    Users findUsersById(Long id);

    Users getUsersById(Long id);
}
