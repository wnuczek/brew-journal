package pl.pawelwnuk.brewjournalapi.ingredient;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

	List<Ingredient> findByName(String name);

	Optional<Ingredient> findById(Long id);
}
