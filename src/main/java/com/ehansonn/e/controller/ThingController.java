package com.ehansonn.e.controller;

import com.ehansonn.e.ThingService.ThingService;
import com.ehansonn.e.model.Thing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/thing")
@CrossOrigin
public class ThingController {
    @Autowired
    private ThingService thingService;

    @PostMapping("/add")
    public String add(@RequestBody Thing thing){
        thingService.saveThing(thing);
        return "New thing is added";
    }

    @GetMapping("/getAll")
    public List<Thing> list() {
        return thingService.getAllThings();
    }
}
