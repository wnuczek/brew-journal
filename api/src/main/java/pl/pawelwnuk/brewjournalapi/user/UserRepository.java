package pl.pawelwnuk.brewjournalapi.user;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

	List<User> findByLastName(String lastName);

	Optional<User> findById(Long id);
}
