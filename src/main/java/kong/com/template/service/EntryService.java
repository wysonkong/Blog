package kong.com.template.service;


import kong.com.template.entity.Entry;
import kong.com.template.repository.EntryRepository;
import org.springframework.stereotype.Service;

@Service
public class EntryService {

    EntryRepository entryRepository;

    public EntryService(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    public Entry getEntryById(Long id) {
        return entryRepository.getEntryById(id);
    }
}
