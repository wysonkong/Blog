package kong.com.template.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private Users createdBy;

    @ManyToOne
    @JoinColumn(name = "comment_entry")
    private Entry commentEntry;

    @Column(nullable = false)
    private String message;

    private Date commentDate;

    public Comment(Users createdBy, Entry commentEntry, String message) {
        this.createdBy = createdBy;
        this.commentEntry = commentEntry;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Users createdBy) {
        this.createdBy = createdBy;
    }

    public Entry getCommentEntry() {
        return commentEntry;
    }

    public void setCommentEntry(Entry commentEntry) {
        this.commentEntry = commentEntry;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
    }
}
