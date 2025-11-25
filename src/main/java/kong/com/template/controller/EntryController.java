package kong.com.template.controller;


import kong.com.template.entity.Entry;
import kong.com.template.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entry")

public class EntryController {

    EntryService entryService;

    public EntryController(EntryService entryService) {
        this.entryService = entryService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entry> getEntryById(@PathVariable Long id) {
        return ResponseEntity.ok(entryService.getEntryById(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Entry>> getAllEntries() {
        return ResponseEntity.ok(entryService.getAllEntries());
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addEntry(@RequestParam String title, @RequestParam String message) {
        entryService.addEntry(title, message);
        return ResponseEntity.ok().build();
    }



}
