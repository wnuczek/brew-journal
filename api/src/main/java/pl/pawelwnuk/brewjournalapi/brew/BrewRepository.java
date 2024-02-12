package pl.pawelwnuk.brewjournalapi.brew;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface BrewRepository extends CrudRepository<Brew, Long> {

	List<Brew> findByName(String name);

	Optional<Brew> findById(Long id);
}
