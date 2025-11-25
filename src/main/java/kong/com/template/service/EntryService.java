package kong.com.template.service;


import kong.com.template.entity.Entry;
import kong.com.template.repository.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryService {

    EntryRepository entryRepository;

    public EntryService(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    public Entry getEntryById(Long id) {
        return entryRepository.getEntryById(id);
    }

    public List<Entry> getAllEntries() {
        return entryRepository.findAll();
    }

    public void addEntry(String title, String message) {
        Entry newEntry = new Entry(title, message);
        entryRepository.save(entry);
    }

}
