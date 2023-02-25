package com.ehansonn.e.ThingService;




import com.ehansonn.e.model.Thing;

import java.util.List;

public interface ThingService {
    public Thing saveThing(Thing thing);

    public void deleteThing(Integer id);
    public List<Thing> getAllThings();

}