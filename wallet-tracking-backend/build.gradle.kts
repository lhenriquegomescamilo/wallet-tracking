import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.jetbrains.kotlin.jvm") version "1.3.50"
	id("io.spring.dependency-management") version "1.0.8.RELEASE"
	id("org.springframework.boot") version "2.2.1.RELEASE"
}

dependencies {
	implementation("org.springframework.fu:spring-fu-kofu:0.2.2")
	implementation("org.springframework.boot:spring-boot-starter-webflux")
	implementation("org.springframework.boot:spring-boot-starter-mustache")
	implementation("org.springframework.boot:spring-boot-starter-data-mongodb-reactive")
	implementation("org.springframework.data:spring-data-r2dbc:1.0.0.RC1")
	implementation("io.r2dbc:r2dbc-postgresql:0.8.0.RELEASE")

	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("de.flapdoodle.embed:de.flapdoodle.embed.mongo")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")

	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

dependencyManagement {
	imports {
		mavenBom("io.r2dbc:r2dbc-bom:Arabba-RC2")
	}
}
repositories {
	mavenLocal()
	mavenCentral()
	maven("https://repo.spring.io/milestone")
	maven("https://repo.spring.io/snapshot")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		jvmTarget = "1.8"
		freeCompilerArgs = listOf("-Xjsr305=strict", "-Xjvm-default=enable")
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

configurations.all {
	exclude(module = "jakarta.validation-api")
	exclude(module = "hibernate-validator")
}
