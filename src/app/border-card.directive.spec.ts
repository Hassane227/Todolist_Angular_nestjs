import { BorderCardDirective } from './border-card.directive';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('BorderCardDirective', () => {
  let directive: BorderCardDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    // Crée un élément DOM simulé pour le test
    elementRef = new ElementRef(document.createElement('div'));

    // Crée une instance de la directive en lui passant l'élément simulé
    directive = new BorderCardDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set initial height', () => {
    directive.setHeight(200);
    expect(elementRef.nativeElement.style.height).toBe('200px');
  });

  it('should set initial border', () => {
    directive.setBorder('#ff0000');
    expect(elementRef.nativeElement.style.border).toBe('solid 4px #ff0000');
  });
});
