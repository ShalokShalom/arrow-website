// This file was automatically generated from validation.md by Knit tool. Do not edit.
package arrow.website.examples.exampleValidation07

import arrow.core.left
import arrow.core.right
import arrow.core.Either
import arrow.core.NonEmptyList
import arrow.core.toNonEmptyListOrNull
import arrow.core.recover
import arrow.core.mapOrAccumulate
import arrow.core.raise.*

sealed interface BookValidationError
object EmptyTitle: BookValidationError
object NoAuthors: BookValidationError
data class EmptyAuthor(val index: Int): BookValidationError

object EmptyAuthorName

data class Author private constructor(val name: String) {
  companion object {
    operator fun invoke(name: String): Either<EmptyAuthorName, Author> = either {
      ensure(name.isNotEmpty()) { EmptyAuthorName }
      Author(name)
    }
  }
}

data class Book private constructor(
  val title: String, val authors: NonEmptyList<Author>
) {
  companion object {
    operator fun invoke(
      title: String, authors: Iterable<String>
    ): Either<NonEmptyList<BookValidationError>, Book> = either {
      zipOrAccumulate(
        { ensure(title.isNotEmpty()) { EmptyTitle } },
        { 
          val validatedAuthors = mapOrAccumulate(authors.withIndex()) {
            Author(it.value)
              .recover { _ -> raise(EmptyAuthor(it.index)) }
              .bind()
          }
          ensureNotNull(validatedAuthors.toNonEmptyListOrNull()) { NoAuthors }
        }
      ) { _, authorsNel ->
        Book(title, authorsNel)
      }
    }
  }
}
