package pl.pawelwnuk.brewjournalapi.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository repository;


	@GetMapping("")
	public Iterable<User> users() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<User> user(@PathVariable Long id) {
		return repository.findById(id);
	}

	@PostMapping
	public User saveUser(@RequestBody User user) {
		return repository.save(user);
	}

}
