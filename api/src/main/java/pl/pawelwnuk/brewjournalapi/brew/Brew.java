package pl.pawelwnuk.brewjournalapi.brew;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
import pl.pawelwnuk.brewjournalapi.ingredient.Ingredient;
import pl.pawelwnuk.brewjournalapi.user.User;

@Getter
@Setter
@Entity
public class Brew {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(unique = true, nullable = false)
	private Integer number;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String style;

	private Integer alc;
	private Integer blg;

	@CreatedDate
	private Date creation_date;

	@ManyToOne()
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "brew")
	@JsonManagedReference
	private List<Ingredient> ingredients;

	@LastModifiedDate
	private Date modification_date;

	private Date brew_date;
	private Date bottling_date;

	@Lob
	private byte[] label;

	protected Brew() {
	}

	public Brew(String name, String style, Integer number, Integer alc, Integer blg) {
		this.name = name;
		this.style = style;
		this.number = number;
		this.alc = alc;
		this.blg = blg;
	}

	@Override
	public String toString() {
		return String.format(
				"Brew[id=%d, number='%d', name='%s']",
				id, number, name);
	}

}
