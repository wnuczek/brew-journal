package pl.pawelwnuk.brewjournalapi.user;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import pl.pawelwnuk.brewjournalapi.brew.Brew;

@Getter
@Setter
@Table(name = "users")
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private String firstName;

	@Column(nullable = false)
	private String lastName;

	@Column(unique = true, nullable = false)
	private String email;

	@CreatedDate
	private Date creation_date;

	@LastModifiedDate
	private Date modification_date;

	@Enumerated(EnumType.STRING)
	private UserRole role;

	@Lob
	private byte[] avatar;

	@OneToMany(mappedBy = "user")
	private List<Brew> brews;

	protected User() {
	}

	public User(String firstName, String lastName, String email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	@Override
	public String toString() {
		return String.format(
				"User[id=%d, email='%s', name='%s']",
				id, email, firstName + " " + lastName);
	}

}
