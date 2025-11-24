package kong.com.template.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private Users createdBy;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false)
    private String message;

    @ElementCollection
    @CollectionTable(name = "entry_images", joinColumns = @JoinColumn(name = "entry_id"))
    @Column(name = "entry_image_value")
    private List<String> images = new ArrayList<>();

    public Entry() {

    }
    public Entry(Users createdBy, String title, List<String> images, String message) {
        this.createdBy = createdBy;
        this.title = title;
        this.images = images;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public Users getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Users createdBy) {
        this.createdBy = createdBy;
    }

}
