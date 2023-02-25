package com.ehansonn.e.ThingService;

import com.ehansonn.e.model.Thing;
import com.ehansonn.e.repository.ThingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThingServiceImpl implements ThingService {

    @Autowired
    private ThingRepository thingRepository;

    @Override
    public Thing saveThing(Thing thing) {
        return thingRepository.save(thing);
    }

    @Override
    public void deleteThing(Integer id) {
        thingRepository.deleteById(id);
    }
    @Override
    public List<Thing> getAllThings() {
        return thingRepository.findAll();
    }
}