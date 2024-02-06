package pl.pawelwnuk.brewjournalapi.brew;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
public class Brew {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Integer number;
	private String name;
	private String style;
	private Integer alc;
	private Integer blg;

	@CreatedDate
	private Date creation_date;

	@LastModifiedDate
	private Date modification_date;

	private Date brew_date;
	private Date bottling_date;

	@Lob
	private byte[] label;

	protected Brew() {
	}

	public Brew(String name, String style, Integer alc, Integer blg) {
		this.name = name;
		this.style = style;
		this.alc = alc;
		this.blg = blg;
		this.creation_date = new Date();
	}

	@Override
	public String toString() {
		return String.format(
				"Brew[id=%d, number='%d', name='%s']",
				id, number, name);
	}

}
