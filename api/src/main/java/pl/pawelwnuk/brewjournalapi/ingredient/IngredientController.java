package pl.pawelwnuk.brewjournalapi.ingredient;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ingredients")
public class IngredientController {

	@Autowired
	private IngredientRepository repository;

	@GetMapping("")
	public Iterable<Ingredient> ingredients() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Ingredient> ingredient(@PathVariable Long id) {
		return repository.findById(id);
	}
}
