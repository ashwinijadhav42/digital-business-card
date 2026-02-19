
package com.digitalcard.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.digitalcard.entity.TemplateCategory;
import com.digitalcard.repository.TemplateCategoryRepository;
import com.digitalcard.service.TemplateCategoryService;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin(origins = "http://localhost:5173")
public class TemplateCategoryController {

	@Autowired
	private TemplateCategoryService templateService;

	@Autowired
	private TemplateCategoryRepository templateCategoryRepository;

// Get all template category
	@GetMapping("/getAllTemplates")
	public List<TemplateCategory> getAllTemplates() {
		return templateService.getAllTemplates();
	}

// Save template category in db
	@PostMapping("/saveTemplateCategory")
	public ResponseEntity<?> saveTemplate(@RequestParam String title, @RequestParam String description,
			@RequestParam String category, @RequestParam Boolean status, @RequestParam("image") MultipartFile image) {
		try {
			// 1️ Save image to folder
			String uploadDir = "uploads/";
			File dir = new File(uploadDir);
			if (!dir.exists())
				dir.mkdirs();

			String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
			Path filePath = Paths.get(uploadDir + fileName);
			Files.write(filePath, image.getBytes());

			// 2️ Save data to entity
			TemplateCategory templateCategory = new TemplateCategory();
			templateCategory.setTitle(title);
			templateCategory.setDescription(description);
			templateCategory.setCategory(category);
			templateCategory.setStatus(status);
			// category.setImageUrl(filePath.toString());// save path
			templateCategory.setImageUrl(fileName);

			templateCategoryRepository.save(templateCategory);

			return ResponseEntity.ok("Template category saved successfully");

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving template");
		}
	}

//Get template category by ID 
	@GetMapping("/getTemplateCategoryById/{id}")
	public ResponseEntity<?> getTemplateById(@PathVariable Long id) {

		Optional<TemplateCategory> optional = templateCategoryRepository.findById(id);

		if (optional.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Template category not found");
		}

		return ResponseEntity.ok(optional.get());
	}
	
	@GetMapping("/category/{category}")
	public ResponseEntity<List<TemplateCategory>> getByCategory(
	        @PathVariable String category) {
	    return ResponseEntity.ok(templateService.getTemplatesByCategory(category));
	}


//Update template category by ID (all fields required)
	@PutMapping(value = "/updateTemplateCategoryAllFieldsRequired/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateTemplate(@PathVariable Long id, @RequestParam String title,
			@RequestParam String description, @RequestParam(required = false) String category, @RequestParam Boolean status,
			@RequestParam(value = "image", required = false) MultipartFile image) {
		try {
			TemplateCategory templateCategory = templateCategoryRepository.findById(id)
					.orElseThrow(() -> new RuntimeException("Category not found"));

			templateCategory.setTitle(title);
			templateCategory.setDescription(description);
			templateCategory.setStatus(status);
			templateCategory.setCategory(category);
			
			if (image != null && !image.isEmpty()) {
				String uploadDir = "uploads/";
				File dir = new File(uploadDir);
				if (!dir.exists())
					dir.mkdirs();

				String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
				Path filePath = Paths.get(uploadDir, fileName);
				Files.write(filePath, image.getBytes());

				templateCategory.setImageUrl(fileName);
			}

			templateCategoryRepository.save(templateCategory);
			return ResponseEntity.ok("Template category updated");

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Update failed");
		}
	}

//Update template category by Id
	@PatchMapping(value = "/updateTemplateCategoryById/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateTemplateCategoryById(@PathVariable Long id,
			@RequestParam(required = false) String title, @RequestParam(required = false) String description,
			@RequestParam(required = false) String category, @RequestParam(required = false) Boolean status,
			@RequestPart(value = "image", required = false) MultipartFile image) {
		try {
			TemplateCategory templateCategory = templateCategoryRepository.findById(id)
					.orElseThrow(() -> new RuntimeException("Category not found"));

			// update only fields that are provided
			if (title != null)
				templateCategory.setTitle(title);
			if (description != null)
				templateCategory.setDescription(description);
			if (category != null)
				templateCategory.setCategory(category);
			if (status != null)
				templateCategory.setStatus(status);

			// update image only if new one is uploaded
			if (image != null && !image.isEmpty()) {
				String uploadDir = "uploads/";
				File dir = new File(uploadDir);
				if (!dir.exists())
					dir.mkdirs();

				String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
				Path filePath = Paths.get(uploadDir, fileName);
				Files.write(filePath, image.getBytes());

				templateCategory.setImageUrl(fileName);
			}

			templateCategoryRepository.save(templateCategory);
			return ResponseEntity.ok(category);

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Update failed");
		}
	}

//Delete template category by Id
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteTemplate(@PathVariable Long id) {

		if (!templateCategoryRepository.existsById(id)) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Template category not found");
		}

		templateCategoryRepository.deleteById(id);
		return ResponseEntity.ok("Template category deleted");
	}

}
