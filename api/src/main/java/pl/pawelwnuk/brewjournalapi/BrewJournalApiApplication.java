package pl.pawelwnuk.brewjournalapi;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import pl.pawelwnuk.brewjournalapi.brew.Brew;
import pl.pawelwnuk.brewjournalapi.brew.BrewRepository;
import pl.pawelwnuk.brewjournalapi.user.User;
import pl.pawelwnuk.brewjournalapi.user.UserRepository;

@SpringBootApplication
public class BrewJournalApiApplication {

	private static final Logger log = LoggerFactory.getLogger(BrewJournalApiApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BrewJournalApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(BrewRepository brewRepository, UserRepository userRepository) {
		return (args) -> {
			// save a few brews
			// brewRepository.save(new Brew("name", "style",1, 50, 120));
			// userRepository.save(new User("Pawel", "Wnuk", "mail@pawelwnuk.pl"));
			// repository.save(new Brew("Chloe", "O'Brian"));
			// repository.save(new Brew("Kim", "Bauer"));
			// repository.save(new Brew("David", "Palmer"));
			// repository.save(new Brew("Michelle", "Dessler"));

			// fetch all brews
			log.info("Brews found with findAll():");
			log.info("-------------------------------");
			brewRepository.findAll().forEach(brew -> {
				log.info(brew.toString());
			});
			log.info("");

			// fetch an individual brew by ID
			Optional<Brew> brew = brewRepository.findById((long) 1);
			log.info("Brew found with findById(1):");
			log.info("--------------------------------");
			log.info(brew.toString());
			log.info("");

			// fetch brews by last name
			log.info("Brew found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			brewRepository.findByName("Bauer").forEach(bauer -> {
				log.info(bauer.toString());
			});
			log.info("");
		};
	}

	@Configuration
	@EnableWebMvc
	public class WebConfig implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")
					.allowedOrigins("*")
					// .allowedMethods("PUT", "DELETE")
					// .allowedHeaders("header1", "header2", "header3")
					// .exposedHeaders("header1", "header2")
					.allowCredentials(false).maxAge(3600);
		}
	}
}
