package pl.pawelwnuk.brewjournalapi.ingredient;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import pl.pawelwnuk.brewjournalapi.brew.Brew;
import pl.pawelwnuk.brewjournalapi.user.User;

@Getter
@Setter
@Entity
public class Ingredient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private String name;

	private String unit;
	private Integer quantity;

	@ManyToOne()
	@JoinColumn(name = "brew_id")
	@JsonBackReference
	private Brew brew;

	protected Ingredient() {
	}

	public Ingredient(String name, String unit, Integer quantity) {
		this.name = name;
		this.unit = unit;
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return String.format(
				"Ingredient[id=%d, name='%s']",
				id, name);
	}

}
