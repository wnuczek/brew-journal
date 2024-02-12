package pl.pawelwnuk.brewjournalapi.brew;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/brews")
public class BrewController {

	@Autowired
	private BrewRepository repository;

	@GetMapping("")
	public Iterable<Brew> brews() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Brew> brew(@PathVariable Long id) {
		return repository.findById(id);
	}

	@PostMapping
	public Brew saveBrew(@RequestBody Brew brew) {
		return repository.save(brew);
	}

	@DeleteMapping("/{id}")
	public void deleteBrew(@PathVariable Long id) {
	}

}
